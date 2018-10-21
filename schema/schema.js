const graphql = require('graphql');
const _ = require('lodash');
const Volunteer = require('../models/volunteer');
const StuffDetail = require('../models/stuffdetail');
const GetLocations = require('../models/getlocation');
const { 
	GraphQLObjectType, 
	GraphQLString, 
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull
} = graphql;


const VolunteerType = new GraphQLObjectType({
	name: 'Volunteer',
	fields: () => ({
		id: {type: GraphQLID},
		volunteerName: {type: GraphQLString},
		location: {type: GraphQLString}
	})
});
const LocationType = new GraphQLObjectType({
	name: 'GetLocations',
	fields: () => ({
		latitude: {type: GraphQLString}
	})
});
const StuffDetailType = new GraphQLObjectType({
	name: 'StuffDetail',
	fields: () => ({
		id: {type: GraphQLID},
		donorName: {type: GraphQLString},
		status: {type: GraphQLString},
		volunteerId: {type: GraphQLString},
		volunteer: {
			type: VolunteerType,
			resolve(parent, args) {
				//return _.filter(books,{authorid: parent.id})
				return Volunteer.findById(parent.volunteerId);
			} 
		}
	})
});


const RootQuery = new GraphQLObjectType({
	name:'RootQueryType',
	fields: {
		volunteers: {
			type: new GraphQLList(VolunteerType),
			resolve(parent, args) {
				//return authors
				return Volunteer.find({});
			}
		},
		getlocations: {
			type: new GraphQLList(LocationType),
			args: {
				latitude: {type: new GraphQLNonNull(GraphQLString)},
				longitude: {type: new GraphQLNonNull(GraphQLString)},
			},
			async resolve(parent, args) {				
				const volunteers = await Volunteer.find({});
				var locationobjs = [];
				const formattedVolunteers = volunteers.map(volunteer => {
					locationobjs.push(volunteer.location);
					const volunteerLocation = volunteer.location;
					console.log(volunteerLocation);
					locationobjs.push(volunteerLocation);
				});
				
				// volunteers.forEach(function (volunteer) {
				//   locationobjs.push(volunteer.location);
				// });

				//console.log(volunteers.map(volunteer => volunteer.location));

				return locationobjs;
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addVolunteer: {
			type: VolunteerType,
			args: {
				volunteerName: {type:new GraphQLNonNull(GraphQLString)},
				location: {type:new GraphQLNonNull(GraphQLString)}
			},
			resolve(parent, args) {
				let volunteer = new Volunteer({
					volunteerName: args.volunteerName,
					location: args.location
				});
				return volunteer.save();
			}
		},
		addStuffDetail: {
			type: StuffDetailType,
			args: {
				status: {type:new GraphQLNonNull(GraphQLString)},
				donorName: {type:new GraphQLNonNull(GraphQLString)},
				volunteerId: {type:new GraphQLNonNull(GraphQLID)},
				type: {type:new GraphQLNonNull(GraphQLString)}
			},
			resolve(parent, args) {
				let stuffdetail = new StuffDetail({
					status: args.status,
					donorName: args.donorName,
					volunteerId: args.volunteerId,
					type: args.type
				});
				return stuffdetail.save();
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
	