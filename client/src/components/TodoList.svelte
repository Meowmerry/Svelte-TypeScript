<script lang="ts">
  interface ListItems {
    text: string;
    status: boolean;
  }
  let newItem: string = "";
  let todoList: ListItems[] = [
    { text: "Write my first post", status: true },
    { text: "Upload the post to the blog", status: false },
    { text: "Publish the post at Facebook", status: false },
  ];

  function addToList() {
    todoList = [...todoList, { text: newItem, status: false }];
    newItem = "";
  }

  function removeFromList(index: number) {
    todoList.splice(index, 1);
    todoList = todoList;
  }

</script>

<div class="container-todo">
  <div>
    <input  bind:value={newItem} type="text" placeholder="new todo item.." />
    <button on:click={addToList}>Add</button>

    <br />
    {#each todoList as item, index}
      <input bind:checked={item.status} type="checkbox" />
      <span class:checked={item.status}>{item.text}</span>
      <span on:click={() => removeFromList(index)}>❌</span>
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
  .checked {
    text-decoration: line-through;
  }
</style>
