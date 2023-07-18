// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as user from './user/fields/query.js'
console.info(`INFO  - Cargando querys.`)
// Querys
const query = new GraphQLObjectType({
	name: 'query',
	description: '...',

	fields: () => ({
		...user
	})
})

export default query
