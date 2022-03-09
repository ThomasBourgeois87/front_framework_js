<template>
    <a class="primaryButton" :href="url">
      <div class="primaryButton__container">
        <icons :name="icon" :size="'16px'" :color="color"></icons>
        <span class="primaryButton__text">{{ title }}</span>
      </div>
    </a>
</template>


<script>
import Icons from "../Icons.vue";
export default {
  name: "ButtonSecondary",
  components: {Icons},
  props: {
    url: {
      name: "url",
      type: String,
      required: true,
    },
    title: {
      name: 'title',
      type: String,
      required: true
    },
    icon: {
      name: 'icon',
      required: true,
      type: String,
    },
    color: {
      name: 'color',
      type: String,
      default: '#ffffff'
    }
  },
}
</script>

<style scoped>

.primaryButton {
  display: inline-block;
  border-radius: 8px;
  background-color: var(--cta-primary-color);
  padding: .8em 2em;
  font-size: 1rem;
}

.primaryButton__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.primaryButton__text {
  margin-left: .5em;
  color: var(--content-tertiary-color);
}
</style>
