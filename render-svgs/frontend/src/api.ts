import type { Shape } from '@/models/shape';

const BASE_URL = 'http://localhost:3003'

export async function saveShape(x: number, y: number): Promise<Shape | undefined> {
    try {
        const response = await fetch(`${BASE_URL}/shapes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ x, y })
        });

        if (!response.ok) {
            throw new Error('Failed to insert shape.');
        }

        return await response.json();
        // Optionally, redirect or perform other actions here
    } catch (error) {
        console.error('Error inserting shape:', (error as any).message);
    }
}

export async function loadShapes(limit: number): Promise<Shape[]> {
    try {
        const response = await fetch(`${BASE_URL}/shapes?limit=${limit}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Failed to load shapes');
        }

        return await response.json();
        // Optionally, redirect or perform other actions here
    } catch (error) {
        console.error('Error inserting shape:', (error as any).message);
        return [];
    }
}

