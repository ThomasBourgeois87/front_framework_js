<template>
<!-- Home -->
  <svg v-if="name === 'home'" :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 40.4974V24.8454C44.0001 23.7564 43.7779 22.6789 43.347 21.6788C42.9161 20.6788 42.2856 19.7772 41.494 19.0294L26.748 5.09337C26.0053 4.39123 25.022 4 24 4C22.978 4 21.9947 4.39123 21.252 5.09337L6.506 19.0294C5.71445 19.7772 5.0839 20.6788 4.653 21.6788C4.22209 22.6789 3.99988 23.7564 4 24.8454V40.4974C4 41.5582 4.42143 42.5757 5.17157 43.3258C5.92172 44.0759 6.93913 44.4974 8 44.4974H40C41.0609 44.4974 42.0783 44.0759 42.8284 43.3258C43.5786 42.5757 44 41.5582 44 40.4974Z" :stroke="color" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <!-- Paper -->
  <svg v-else-if="name === 'paper'" :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V16.684C39.9999 16.1511 39.8934 15.6236 39.6866 15.1325C39.4799 14.6414 39.1771 14.1965 38.796 13.824L29.916 5.14C29.1687 4.40932 28.1651 4.00013 27.12 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V8Z" :stroke="color" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 4V12C28 13.0609 28.4214 14.0783 29.1716 14.8284C29.9217 15.5786 30.9391 16 32 16H40" :stroke="color" stroke-width="6" stroke-linejoin="round"/>
  </svg>

  <svg v-else-if="name === 'person'" :width="size" :height="size" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_61_92)">
      <path d="M7.99999 8.49999C9.84094 8.49999 11.3333 7.00761 11.3333 5.16666C11.3333 3.32571 9.84094 1.83333 7.99999 1.83333C6.15904 1.83333 4.66666 3.32571 4.66666 5.16666C4.66666 7.00761 6.15904 8.49999 7.99999 8.49999Z" :stroke="color" stroke-width="2"/>
      <path d="M11.3333 15.1667H3.51066C3.32158 15.1667 3.13465 15.1265 2.96229 15.0488C2.78992 14.9711 2.63606 14.8576 2.51091 14.7159C2.38576 14.5741 2.29218 14.4074 2.23639 14.2267C2.1806 14.0461 2.16388 13.8556 2.18732 13.668L2.44732 11.5853C2.50779 11.1015 2.74293 10.6564 3.10854 10.3337C3.47415 10.0111 3.94504 9.83314 4.43266 9.83333H4.66666" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.6667 9.16666V13.1667" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.6667 11.1667H14.6667" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_61_92">
        <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
      </clipPath>
    </defs>
  </svg>

  <svg v-else-if="name === 'menu_burger'" :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 24H42" :stroke="color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 12H42" :stroke="color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 36H42" :stroke="color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>



</template>

<script>
export default {
  name: "icons",
  props: ['name', 'size', 'color']
}
</script>

<style scoped>

</style>
