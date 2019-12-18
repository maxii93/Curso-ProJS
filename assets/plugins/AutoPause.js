class AutoPause {
    constructor () {
        this.HandleIntersection = this.HandleIntersection.bind(this);
        this.threshold = 0.25;
    }
    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.HandleIntersection, {
            threshold: this.threshold
        });

        observer.observe(this.player.media)
    }

    HandleIntersection(entries) {
        const entry = entries[0];

        entry.isIntersecting ? this.player.play() : this.player.pause();
    }
}

export default AutoPause;