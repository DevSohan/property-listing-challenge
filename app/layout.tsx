"use client"
import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./lib/Store/store";



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html lang="en">
		<body className={`antialiased bg-gray-100`}>
			<Provider store={store}>
				{children}
			</Provider>
		</body>
		</html>
	);
}
