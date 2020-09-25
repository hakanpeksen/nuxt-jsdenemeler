<template>
  <div>
    <select v-model="selectedValue" @change="onChange(selectedValue)">
      <option
        v-for="(locale, index) in $i18n.locales"
        :key="index"
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  created() {
    this.selectedValue = this.$i18n.locale
  },
  methods: {
    onChange(event) {
      this.$router.replace({ path: this.switchLocalePath(event) })
    }
  }
}
</script>
