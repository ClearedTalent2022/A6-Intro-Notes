export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
	}

	isSpaceDebris(): boolean {
		// this method should return true IF you call it on a Satellite object
		// that has a type of 'Space Debris'
		// Example: someSatelliteObj.isSpaceDebris()
		// would return if someSatellite.type === 'Space Debris'
		return true;
	}

}

// TODO 3a: fix isSpaceDebris check
