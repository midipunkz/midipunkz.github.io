
export default function PlayMidiVaderzButton() {
    return (
        <a
            href="https://ima.midipunkz.com/midivaderz"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-w-[200px] items-center justify-center gap-3 border-4 border-primary bg-black px-8 py-6 font-mono text-xl uppercase tracking-wider text-primary transition-all hover:scale-105 hover:border-primary/80 hover:text-primary/90 active:scale-95"
        >
            <span className="animate-pulse text-2xl" aria-hidden="true">
                🎮
            </span>
            <span className="relative">
                Play MidiVaderz
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
            </span>
        </a>
    )
}