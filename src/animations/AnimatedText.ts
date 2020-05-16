import anime from 'animejs';

export default class AnimatedText {
    private readonly el: any;

    public constructor(el: any) {
        this.el = el;
    }

    public show(): AnimatedText {
        anime(
            {
                targets: this.el.childNodes,
                delay: (el, i) => {
                    return i * 50;
                },
                opacity: 1,
                duration: 500,
                translateY: [-30, 0],
                easing: 'easeOutElastic',
            },
        );
        return this;
    }

    public hide(): AnimatedText {
        anime(
            {
                targets: this.el.childNodes,
                delay: (el, i) => {
                    return i * 50;
                },
                opacity: 0,
                duration: 500,
                translateY: [0, 30],
                easing: 'easeInElastic',
                complete: () => this.el.style.display = 'none',
            },
        );
        return this;
    }
}
