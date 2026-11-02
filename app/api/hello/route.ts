export async function GET() {
  return Response.json({
    message: "Hello from Next.js API!",
    developer: "Preston Machanga",
    status: "success",
  });
}