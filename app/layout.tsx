import React from "react";

export const metadata = {
  title: "Nayana's Reading Log",
  description: 'Will I make it to 50 books this year?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
