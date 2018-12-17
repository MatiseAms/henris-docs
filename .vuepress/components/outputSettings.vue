<template>
  <section>
    <table v-if="outputs">
      <tbody
        v-for="(output, index) in outputs"
        :key="index"
      >
        <tr
          class="parent"
          :class="[output.value ? 'visible' : 'invisible']"
          v-if="output.name !== 'css' && output.name !== 'full'"
        >
          <td>{{output.name}}</td>
          <td>{{output.value}}</td>
        </tr>

        <tr
          class="child"
          :class="[child.value ? 'visible' : 'invisible']"
          v-if=" output.children "
          v-for="(child, childIndex) in output.children "
          :key="childIndex "
        >
          <td>{{child.name}}</td>
          <td>{{child.value}}</td>
          <td><div class="input-switch"><label></label><input type="checkbox" /></div></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
// import outputData from "henris/data/output.json";
import axios from "axios";
export default {
  data() {
    return {
      outputs: {},
			settings: {},
			outputData: null
    };
  },
  created() {
		console.log('hoiii');
		
    let settingsFile =
			"https://raw.githubusercontent.com/MatiseAms/henris/develop/data/output.json";
			console.log(settingsFile);
    axios({
      url: settingsFile,
      method: "GET"
    }).then(response => {
			console.log(response);
			this.outputData = response.data.output[0];
			this.processOutputs();
    });
    // this.processOutputs(outputData.output[0]);
  },
  methods: {
    objectLength: function(object) {
      var length = 0;
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          ++length;
        }
      }
      return length;
    },
    processOutputs: function() {
      let output = [];
      let i = 0;
      let _this = this;
      // console.log(input);
      // First get all parents:
      Object.keys(_this.outputData).forEach(function(key) {
        i++;
        if (key.indexOf("-") < 0) {
          output.push({ name: key, value: _this.outputData[key] });
        }
        if (_this.objectLength(_this.outputData) == i) {
          let j = 0;
          Object.keys(output).forEach(function(parent) {
            j++;
            Object.keys(_this.outputData).forEach(function(child) {
              if (child.indexOf("-") > 0) {
                if (child.split("-")[0] == output[parent].name) {
                  if (!output[parent].children) {
                    output[parent].children = [];
                  }
                  // console.log(output[parent].children);
                  output[parent].children.push({
                    name: child,
                    value: _this.outputData[child]
                  });
                }
              }
            });
            if (_this.objectLength(output) == j) {
              _this.outputs = output;
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "~henris";
table { width: 100%;
  .parent {
    // color: color(accentColor);
    font-weight: bold;
		&.invisible{
			& ~ tr td{
				opacity: 0.5; 
			}
		}
  }
  .child td:first-child {
    padding-left: 2rem;
  }
  .invisible {
    opacity: 0.5;
  }
	
}
</style>
