import anime from "animejs";

export default class AnimatedBlob {
    private readonly el: any;

    public constructor(el: any) {
        this.el = el;
    }

    public start(): void {
        anime.timeline({
            targets: this.el,
            duration: 200,
            fillOpacity: [0, 1],
            delay: this.el.dataset.animationDelay,
            easing: 'easeOutCubic'
        }).add({
            d: [this.el.dataset.initPath, this.el.d],
            duration: 700,
            easing: 'easeOutElastic',
            complete: () => this.animate()
        });
    }

    public end(): void {
        anime.remove(this.el);
        anime.timeline({
            targets: this.el,
            delay: this.el.dataset.animationDelay / 2,
        }).add({
            d: this.el.dataset.initPath,
            duration: 700,
            easing: 'easeInElastic',
            fillOpacity: [1, 0],
        });
    }


    private animate(): void {
        anime({
                targets: this.el,
                d: this.el.dataset.morphPath,
                duration: this.el.dataset.animationDuration,
                easing: this.el.dataset.animationEasing,
                scaleY: this.el.dataset.animationScaleY,
                scaleX: this.el.dataset.animationScaleX,
                rotate: this.el.dataset.animationRotate,
                direction: 'alternate',
                loop: true,
            },
        );
    }
}
