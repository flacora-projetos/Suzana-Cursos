const fetch = require('node-fetch');

async function test() {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxzSUKy395UN1Dd-j1HuoMzMi7-YUil7dO1PkYrS89FI2x7-y3Dg4_iI1VQarELYtE/exec", {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({
        name: "Test",
        whatsapp: "1234567890",
        email: "test@test.com"
      }),
    });
    const text = await response.text();
    console.log("Status:", response.status);
    console.log("Text:", text);
  } catch (e) {
    console.error(e);
  }
}

test();
