// First, create a new Next.js project with the following structure:

// src/types/index.ts
interface User {
  _id?: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  password: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface Service {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface Portfolio {
  _id?: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TeamMember {
  _id?: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

interface BlogPost {
  _id?: string;
  title: string;
  content: string;
  excerpt: string;
  author: string | User;
  image: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}


// src/types/hero.ts
export interface HeroConfig {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundConfig: {
    starsCount: number;
    starsRadius: number;
    starsColor: string;
  };
}

// src/data/heroConfig.ts
export const defaultHeroConfig: HeroConfig = {
  title: "Your Organization Name",
  subtitle: "Creating digital experiences that inspire",
  buttonText: "Explore Our Work",
  buttonLink: "/portfolio",
  backgroundConfig: {
    starsCount: 5000,
    starsRadius: 1.5,
    starsColor: "#ffffff"
  }
};

// src/lib/api/hero.ts
import clientPromise from '@/lib/mongodb';
import { HeroConfig } from '@/types/hero';

export async function getHeroConfig(): Promise<HeroConfig> {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    const config = await db.collection('config').findOne({ type: 'hero' });
    return config?.data || defaultHeroConfig;
  } catch (error) {
    console.error('Error fetching hero config:', error);
    return defaultHeroConfig;
  }
}

export async function updateHeroConfig(config: HeroConfig) {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    await db.collection('config').updateOne(
      { type: 'hero' },
      { 
        $set: { 
          data: config,
          updatedAt: new Date()
        }
      },
      { upsert: true }
    );
    
    return { success: true };
  } catch (error) {
    console.error('Error updating hero config:', error);
    throw error;
  }
}
// src/lib/mongodb.ts
import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// src/lib/auth.ts
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import clientPromise from './mongodb';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const client = await clientPromise;
        const db = client.db();
        const user = await db.collection('users').findOne({ email: credentials.email });

        if (!user) {
          throw new Error('No user found');
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error('Invalid password');
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        };
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// src/lib/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (file: any) => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: 'portfolio',
    });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

// src/lib/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const client = await clientPromise;
    const db = client.db();

    // Save to database
    await db.collection('messages').insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    // Send email notification
    await sendEmail(
      process.env.ADMIN_EMAIL!,
      `New Contact Message: ${subject}`,
      `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Create a .env.local file with:
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_HOST=your_smtp_host
EMAIL_PORT=your_smtp_port
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password
EMAIL_FROM=your_from_email
ADMIN_EMAIL=your_admin_email

// Install necessary dependencies:
// npm install or yarn add:
// - next-auth
// - mongodb
// - bcryptjs
// - cloudinary
// - nodemailer
// - react-hook-form
// - @hookform/resolvers
// - zod
// - lucide-react
// - tailwindcss
// - @tailwindcss/forms