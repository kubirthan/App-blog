export default function Header() {
    return (
        <header class="bg-white shadow-lg">
        <div class="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 class="text-2xl">Blog</h1>
            <nav class="space-x-4">
                <a href="#" class="text-blue-500">Home</a>
                <a href="#" class="text-blue-500">About</a>
                <a href="#" class="text-blue-500">Contact</a>
            </nav>
        </div>
    </header>
    )
}