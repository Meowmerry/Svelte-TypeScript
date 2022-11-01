<script lang="ts">
  import ListItem from './ListItem.svelte'
  export let todoList;
  let newItem;
 

  function addToList() {
    todoList = [...todoList, { text: newItem, status: false }];
    newItem = "";
  }


</script>

<div class="container-todo">
  <div>
    <input  bind:value={newItem} type="text" placeholder="new todo item.." />
    <button on:click={addToList}>Add</button>

    <br />
    {#each todoList as item, index}
     <ListItem item={item} todoList={todoList} index={index}/>
      <br />
    {/each}
    <br />
  </div>
</div>

<style>
  .container-todo {
    display: flex;
    justify-content: center;
  }
</style>
