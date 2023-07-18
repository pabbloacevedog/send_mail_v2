// Imports
import { GraphQLString, GraphQLList } from 'graphql'

// App Imports
import UserType from '../type.js'
import {
	search_by_user,
	search_by_email,
	search_by_id,
	all_users,
	check_user,
	sendMail
} from '../resolvers.js'

// Users All
export const Users = {
	type: new GraphQLList(UserType),
	resolve: all_users
}

// user By user
export const SearchByUser = {
	type: UserType,
	args: {
		user: {
			type: GraphQLString
		}
	},
	resolve: search_by_user
}

// user By email
export const SearchByEmail = {
	type: UserType,
	args: {
		email: {
			type: GraphQLString
		}
	},
	resolve: search_by_email
}

// user By id
export const SearchById = {
	type: UserType,
	args: {
		id: {
			type: GraphQLString
		}
	},
	resolve: search_by_id
}

export const CheckUser = {
	type: UserType,
	args: {
		user: {
			type: GraphQLString
		}
	},
	resolve: check_user
}

export const mail = {
	type: UserType,
	args: {
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
		designated_wallet: {
			type: GraphQLString
		},
	},
	resolve: sendMail,
};
