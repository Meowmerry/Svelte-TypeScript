<script lang="ts">
import Header from './components/Header.svelte';
import TodoList from './components/TodoList.svelte'
interface PersonProps {
            name: string
            age: number 
			description: string
}
export const person: PersonProps = {
            name: 'Todo List',
            age: 18,
			description: "Let's get play!",
}
</script>
<main>
<Header  name={person.name} age={person.age} description={person.description} />
<TodoList />

</main>
 
<style>

</style>