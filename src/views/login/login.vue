<template lang="">
  <div>
    过滤器
    {{msg|fliter}}
    <div>
      {{time|fliterTime}}---------{{time | fliterTime('YYYY-MM-DD')}}
      ---------------{{time | fliterTime('HH:mm:ss')}}
    </div>
    <div>
      累加：{{som}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 1123.3423,
      time: new Date(),
      book: [1, 4, 5, 2, 6, 7, 34, 21, 879, 213, 32]
    };
  },
  filters: {
    fliter(val) {
      return "￥" + val.toFixed(2);
    },
    fliterTime(dateStr, time) {
      var date = new Date(dateStr);
      var year = date.getFullYear();
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var mm =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var ss =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

      //return `${year}-${month}-${day}`;

      if (time && time.toLowerCase() === "yyyy-mm-dd") {
        return `${year}-${month}-${day}`;
      } else if (time && time.toLowerCase() === "hh:mm:ss") {
        return `${hh}:${mm}:${ss}`;
      } else {
        return `${year}-${month}-${day} ${hh}:${mm}:${ss}`;
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  },
  computed: {
    som: function() {
      return this.book
        .filter(val => {
          return val < 100;
        })
        .map(val => {
          console.log(val);
          return val * 2;
        })
        .reduce((pre, curr) => {
          return pre + curr;
        }, 0);
    }
  }
};
</script>
