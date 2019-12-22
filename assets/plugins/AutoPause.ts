import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private threshold: number;
    player: MediaPlayer;

    constructor () {
        this.HandleIntersection = this.HandleIntersection.bind(this);
        this.HandleVisibilityChange = this.HandleVisibilityChange.bind(this);
        this.threshold = 0.25;
    }
    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.HandleIntersection, {
            threshold: this.threshold
        });

        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.HandleVisibilityChange)
    }

    HandleVisibilityChange() {
        const isVisible = document.visibilityState === "visible"
        isVisible ? this.player.play() : this.player.pause();
    }

    HandleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];

        entry.isIntersecting ? this.player.play() : this.player.pause();
    }
}

export default AutoPause;