<template lang="">
  <div>
    双向书记绑定
    <input @input="FNinput($event)" type="text">
    <input type="radio" name="radio" 　id="radio1" v-model="sex" value="男">
    <input type="radio" name="radio" 　id="radio2" v-model="sex" value="女">
    <input type="checkbox" name="" 　 v-model="fruits" value="苹果">
    <input type="checkbox" name="" 　 v-model="fruits" value="桃子">
    <input type="checkbox" name="" 　 v-model="fruits" value="栗子">
    <div>
      <input type="checkbox" v-model="isAgree"> 是否同意
      <button　:disabled="!isAgree">提交</button>
    </div>
    <div>
      下拉选择
      <select v-model="fruit">
        <option value="请选择">请选择</option>
        <option value="苹果">苹果</option>
        <option value="香蕉">香蕉</option>
        <option value="榴莲">榴莲</option>
      </select>
    </div>
    <div ref="inp">
      限制多选个数：
      <label :for="index" v-for="(item, index) in fruitall" :key="index">
        <input type="checkbox" name="" :id="index" :value="item.name" v-model="item.select" :disabled='item.disabled'
          @change="FNcheck($event,index)">{{item.name}}</label>
      全选 <input type="checkbox" name="" id="" @input="checkALL($event)" v-model="checkALLSeleced">
    </div>
    <div>
      搜索:
      <input type="text" name="" value="" v-model.trim="seachVal" @input="FnSeach">
      <ul>
        <li v-for="(item, index) in fruitall" :key="index">{{item.name}}</li>
      </ul>
      <ul>
        <li v-for="(item, index) in seachList" :key="index">{{item.name}}</li>
      </ul>
      <ul>
        <li v-for="(item, index) in seachListC" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 1123.3423,
        time: new Date(),
        book: [1, 4, 5, 2, 6, 7, 34, 21, 879, 213, 32],
        sex: "",
        fruits: [],
        fruit: "榴莲",
        fruitall: [{
          name: '苹果',
          select: false,
          disabled: false
        }, {
          name: '石榴',
          select: false,
          disabled: false
        }, {
          name: '榴子莲',
          select: false,
          disabled: false
        }, {
          name: '栗子',
          select: false,
          disabled: false
        }, {
          name: '香蕉',
          select: false,
          disabled: false
        }],
        fruitlIST: [],
        isAgree: false,
        checkALLSeleced: false,
        seachVal: '',
        seachList: []

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
          date.getMonth() + 1 < 10 ?
          "0" + (date.getMonth() + 1) :
          date.getMonth() + 1;
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
      som: function () {
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
      },
      seachListC: function () {
        let that = this
        let seachVal = that.seachVal.trim()
        if (seachVal == "" || undefined || null || seachVal.length == 0) {
          return []
        } else {
          return that.fruitall.filter(item => {
            return item.name.indexOf(seachVal) !== -1
          })
        }
      }

    },
    methods: {

      FnSeach() {
        let that = this
        let seachVal = that.seachVal.trim()
        if (seachVal == "" || undefined || null || seachVal.length == 0) {
          that.seachList = []
        } else {
          that.seachList = that.fruitall.filter(item => {
            return item.name.indexOf(seachVal) !== -1
          })
        }

      },
      FNinput(evnet) {
        console.log(evnet.target.checked);
      },
      checkALL(event) {
        let that = this
        if (event.target.checked) {
          that.fruitall = that.fruitall.filter(item => {
            if (!item.select) {
              item.select = true
            }
            return item
          })
          that.fruitlIST = that.fruitall.filter(item => {
            if (item.select) {
              return item.name
            }
          })
        } else {
          that.fruitall = that.fruitall.filter(item => {
            item.select = false
            return item
          })
          that.fruitlIST = []
        }
      },
      // ｅ目标， index是索引值
      FNcheck(event, index) {
        let that = this
        that.fruitlIST = that.fruitall.filter(item => {
          if (item.select) {
            return item
          }
        })
        //限制个数
        if (that.fruitlIST.length >= 3) {
          that.fruitall = that.fruitall.filter(item => {
            if (!item.select) {
              item.disabled = true
            }
            return item
          })
        } else {
          that.fruitall = that.fruitall.filter(item => {
            item.disabled = false
            return item
          })
        }
        //全选
        if (that.fruitlIST.length != that.fruitall.length) {
          return
        } else {
          that.checkALLSeleced = true
        }
      }

    }
  };

</script>
