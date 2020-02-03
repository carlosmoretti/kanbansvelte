<script>
    import { Button, Col, Row, Card, CardHeader, CardBody, CardTitle } from 'sveltestrap';
    import { boardName, boards } from '../stores/KanbanStore.js';
    import { onMount } from 'svelte';

    let nomeQuadro;
    let quadros = [];
    
    onMount(async() => {
        boardName.subscribe(d=> {
            nomeQuadro = d
        })

        boards.subscribe(d=> {
            quadros = d
            console.log(d)
        })
    })
</script>

<style>
</style>

<div>
    <Card>
        <CardHeader>
            <CardTitle>Quadro {nomeQuadro}</CardTitle>
        </CardHeader>
        <CardBody>
            <Row>
                {#each quadros as item}
                    <Col>
                        <Card>
                            <CardHeader>
                                <CardTitle>{item.nome}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Button class="btn btn-sm w-100">Adicionar Task!</Button>
                            </CardBody>
                        </Card>
                    </Col>
                {/each}
            </Row>
        </CardBody>
    </Card>
</div>
