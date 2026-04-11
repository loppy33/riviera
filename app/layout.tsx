
import "@/app/styles/index.sass"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}