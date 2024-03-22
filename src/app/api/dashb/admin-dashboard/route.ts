


export async function GET() {
    const res = await fetch(process.env.MONGO_URI, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }