//app.js
const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config');
const produtoModel = require('./models/produtoModel');
const sequelize = new Sequelize(config.developement);
const Produto = ProdutoModel(sequelize, DataTypes);
async function run() {

// Sync do sequelize com banco de dados
    try {
        //1-CREATE
        const resultadoCreate = await Produto.create({
            nome: 'Teclado',
            preco: 55.99,
            descricao: 'cor: vermelho, saída bluetooth'
        })
        console.log('Novo produto cadastrado', resultadoCreate.toJSON());


        //2-READ - LISTAR TODOS OS PRODUTOS
        const produtos = await Produto.findAll();
        console.log('Produtos Cadastrados:', produtos.map(p => p.toJSON()));


        //3-READ - LISTAR UM PRODUTO ESPECÍFICO (PREÇO ESPECÍFICO, DESCRIÇÃO ESPECÍFICA ETC)
        const produtoEspecifico = await Produto.findAll({
            where: {
                descricao: 'saída bluetooth'
            }
        });
        console.log('Produtos encontrados:', produtoEspecifico);

        //4 - READ - LISTAR UM PRODUTO ESPECÍFICO POR ID (CHAVE) - EXEMPLO PRODUTO ID 1
        const produtoPorId = await Produto.findByPk();
        console.log('Produto localizado:', produtoPorId);


        //5 - UPDATE - ALTERAR UM PRODUTO
        const produto = await Produto.findByPk();
        produto.nome; //alterar nome
        produto.descricao; //alterar descrição
        const resultadoSave = await produto.save();
        console.log(resultadoSave > 0 ? 'Atualizado com sucesso!' : 'Produto não encontrado!', resultadoSave);

        // 6 - DELETE
        const resultadoDestroy = await Produto.destroy({ where: { id: resultadoCreate.id } });
        console.log(
            'Produto removido:', resultadoDestroy > 0 ? 'Removido com sucesso!' : 'Produto não encontrado!'
        );
             //deletar produto pesquisando por nome
        //TRATAMENTO DE EXCEÇÕES
        } catch (error) {
        console.log('ERROR\n', error.message);

         //AO FINALIZAR O SCRIPT, FINALIZA A CONEXÃO COM O BANCO DE DADOS
        } finally {
        await Produto.sequelize.close();
        } 
    }
    run();