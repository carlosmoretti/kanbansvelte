<head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>

<script>
	import Board from './components/Board.svelte'
	import { Button, Input, FormGroup } from 'sveltestrap';
	import { boards } from './stores/KanbanStore.js'
	let nomeRaia;

	const AdicionarRaia = () => {
		boards.update((n) => {
			n.push({
				nome: nomeRaia
			})

			return n
		})
	}
</script>

<main>
	<FormGroup>
		<Input bind:value={nomeRaia} type="text" placeholder="Nome da raia" />
		<Button on:click={AdicionarRaia}>Adicionar Raia</Button>
	</FormGroup>
	
	<Board boardName="Teste"/>
</main>