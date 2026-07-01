import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET() {
  try {
    const [rows] = await pool.execute('SELECT 1 + 1 AS result');
    return NextResponse.json({ 
      success: true, 
      message: 'Database connected successfully!',
      data: rows
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Database connection failed',
      error: String(error)
    }, { status: 500 });
  }
}