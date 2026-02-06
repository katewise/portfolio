export async function onRequestPost({ request }) {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const body = `
New contact form submission:

Name: ${name}
Email: ${email}

Message:
${message}
  `;

  const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: "hello@knowhr.co.nz" }] }],
      from: {
        email: "no-reply@knowhr.co.nz",
        name: "KnowHR Contact Form",
      },
      subject: "New Contact Form Submission",
      content: [{ type: "text/plain", value: body }],
    }),
  });

  if (!response.ok) {
    return new Response("Email failed", { status: 500 });
  }

  return Response.redirect("https://knowhr.co.nz/thanks.html", 302);
}
