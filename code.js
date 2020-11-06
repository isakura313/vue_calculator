function isNotNumber(value) {
    return Number.isNaN(value);
}

const calc = new Vue({
    el: "#app",
    data: {
        x: 0,
        y: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        lastResult: 10,
        time: "Сегодня такое-то время"
    },
    mounted() {
        this.$options.timer = window.setTimeout(this.updateDateTime, 1000);
    },
    computed: {
        result: function() {
            let x = +this.x;
            if(isNotNumber(x)) return this.lastResult;

            let y = +this.y;
            if( isNotNumber(y)) return this.lastResult;

            this.lastResult = x + y
            return `Результат сложения ${this.lastResult}`
        }
    }, methods:{
        updateDateTime() {
            const now = new Date();
            this.hours = now.getHours();
            this.minutes = now.getMinutes();
            this.seconds =  now.getSeconds();
            this.$options.timer = window.setTimeout(this.updateDateTime, 1000);
    },
    }

})
