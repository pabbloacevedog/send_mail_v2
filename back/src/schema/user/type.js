// Imports
import {GraphQLObjectType, GraphQLString ,GraphQLBoolean} from 'graphql'

// UserType
const UserType = new GraphQLObjectType({
	name: 'user',
	description: '...',
	fields: () => ({
        user_id:{
            type: GraphQLString
        },
        dni: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        user: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
		address: {
			type: GraphQLString
		},
		city: {
			type: GraphQLString
		},
		country: {
			type: GraphQLString
		},
        url_img: {
            type: GraphQLString
        },
		url_img_history: {
            type: GraphQLString
        },
        sent: {
            type: GraphQLBoolean
        },
		instagram: {
            type: GraphQLString
        },
        facebook: {
            type: GraphQLString
        },
        whatsapp: {
            type: GraphQLString
        },
		realtive: {
            type: GraphQLString
        },
		relationship: {
            type: GraphQLString
        },
        creation_date: {
            type: GraphQLString
        },
        date_sent: {
            type: GraphQLString
        },
		designated_wallet: {
			type: GraphQLString
		},
	})
})

export default UserType

