<template>
  <div>
    <table>
			<tr v-for="(value,key) in tableData">
				<td><strong>{{key}}</strong></td>
				<td><code>{{value}}</code></td>
				<td><code>${{get}}-{{key}}</code></td>
			</tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    file: {
      type: String,
      default: null
    },
    get: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      tableData: []
    };
  },
  created() {
    if (this.$props.file) {
      this.getJson(this.$props.file);
    } else {
      console.log("no file given to create the table");
    }
  },
  methods: {
    getJson(file) {
      axios({
        url: file,
        method: "GET"
      }).then(response => {
        console.log(response);
        if (this.$props.get) {
          this.tableData = response.data[this.$props.get];
        } else {
          this.tableData = response.data;
        }
      });
    }
  }
};
</script>