<script lang="ts">
  export let type: string;
  export let className = '';
  export let title: string;
  let buttonCSS: string;

  switch (type) {
    case 'primary':
      buttonCSS = 'bg-blue-500 hover:bg-[#33c9fe]';
      break;

    case 'submit':
      buttonCSS = 'bg-[#00384A] hover:bg-[#004158]';
      break;

    case 'warning':
      buttonCSS = 'bg-orange-600 hover:bg-orange-500';
      break;

    case 'breaking':
      buttonCSS = 'bg-red-600 hover:bg-red-500';
      break;

    case 'muted':
      buttonCSS = 'bg-gray-600 hover:bg-gray-500';
      break;

    default:
      buttonCSS = 'bg-blue-500 hover:bg-[#33c9fe]';
      break;
  }
</script>

<button
  on:click
  {title}
  class={`p-2 text-white ${buttonCSS} rounded-md shadow hover:shadow-lg transition-all duration-200 ${className}`}
>
  <slot />
</button>
