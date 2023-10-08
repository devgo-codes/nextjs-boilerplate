import Navbar from "@/components/Navbar";
import { ChakraThemeProvider } from "@/providers/chakra-provider";
import StoreProvider from "@/providers/store-provider";
import { Container} from "@chakra-ui/react";

export const metadata = {
    title: "Next.js",
    description: "Generated by Next.js",
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <ChakraThemeProvider>
                        <Container size="sm">
                            <Navbar />
                            {children}
                        </Container>
                    </ChakraThemeProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
