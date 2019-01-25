<template>
  <form>

    <div
      v-for="(type,index) in inputTypes"
      :key="index"
    >
      <h3>{{ type }}</h3>
      <div class="row medium-half">
        <div class="column">

          <example>
            <div
              :class="`input-${type}`"
              class="input-field"
            >

              <template v-if="type == 'button' || type == 'submit'|| type == 'text'|| type == 'email'">
                <label :for="`input-field1-${index}`">{{ type }}</label>
                <input
                  :id="`input-field1-${index}`"
                  :type="type"
                  v-model="inputValue"
                >
              </template>
              <template v-else-if="type == 'radio' || type == 'checkbox'">
                <input
                  :id="`input-field1-${index}`"
                  :type="type"
                  v-model="inputValue"
                >
                <label :for="`input-field1-${index}`">{{ type }}</label>
              </template>
              <template v-else-if="type == 'switch'">
                <input
                  :id="`input-field1-${index}`"
                  type="checkbox"
                  v-model="inputValue"
                >
                <label :for="`input-field1-${index}`">{{ type }}</label>
              </template>
              <template v-else>
                <label :for="`input-field1-${index}`">{{ type }}</label>
                <input
                  :id="`input-field1-${index}`"
                  :type="type"
                >
              </template>
            </div>
          </example>

        </div>
        <div class="column">
          <vp-markdown
            lang="html"
            :source="`<div class='input-field input-${type}'>
	<label for='input-field'>${type}</label>
	<input id='input-field' type='${type}'>
</div>`"
          >
          </vp-markdown>
        </div>
      </div>
    </div>
  </form>

</template>


<script>
import Prism from "prismjs";
export default {
  data() {
    return {
      inputValue: "example",
      inputTypes: [
        "button",
        "checkbox",
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "switch",
        "submit",
        "tel",
        "text",
        "time",
        "url",
        "week"
      ]
    };
  }
};
</script>