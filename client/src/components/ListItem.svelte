<script lang="ts">
    export let item
    export let todoList;
    export let index

    function removeFromList(index: number) {
    todoList.splice(index, 1);
    todoList = todoList;
    }
</script>
<div>

    <input bind:checked={item.status} type="checkbox" />
<span class:checked={item.status}>{item.text}</span>
<span on:click={() => removeFromList(index)}>❌</span>
</div>


<style>
    .checked {
      text-decoration: line-through;
    }
  </style>