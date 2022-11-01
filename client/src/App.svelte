<script lang="ts">
import AboutMe from './components/svelt-site/AboutMe.svelte'; 
import DemoSvelt from './components/svelt-site/AboutMe.svelte'; 
import Contributors from './components/svelt-site/Contributors.svelte';
import NavBar from './components/svelt-site/NavBar.svelte'
import Header from './components/Header.svelte';
import TodoList from './components/TodoList.svelte'
interface ListItems {
    text: string;
    status: boolean;
}

let todoList: ListItems[] = [
    { text: "Write my first post", status: true },
    { text: "Upload the post to the blog", status: false },
    { text: "Publish the post at Facebook", status: false },
  ];
interface PersonProps {
            name: string
            age: number 
			description: string
}
export const person: PersonProps = {
            name: 'Todo List',
            age: 20,
			description: "Let's get play!",
}
</script>
<main>
<!-- <Header  name={person.name} age={person.age} description={person.description} />
<TodoList todoList={todoList} /> -->
<!-- <AboutMe/>
<DemoSvelt/> -->
<NavBar />
<Contributors/>

</main>
 