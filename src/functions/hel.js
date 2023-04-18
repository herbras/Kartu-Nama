// src/functions/hello.js
export async function handler(event, context) {
    const expiresDate = new Date(Date.now() + 86400 * 1000); // Expires in 24 hours (86400 seconds)
    const expiresString = expiresDate.toUTCString();
  
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=86400',
        'Expires': expiresString,
      },
      body: JSON.stringify({ message: 'Hello from QLM Team !!' }),
    };
  }
  