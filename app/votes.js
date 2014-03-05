var votes = {
    questions : [
        {
            name        : 'tools',
            id          : 0,
            value       : 0,
            description : 'Dev Tools I love'
        },
        {
            name        : 'grunt',
            id          : 1,
            value       : 0,
            description : 'GruntJS'
        },
        {
            name        : 'photoshop',
            id          : 2,
            value       : 0,
            description : "Why you shouldn't use Photoshop"
        },
        {
            name        : 'drc',
            id          : 3,
            value       : 0,
            description : "Democratic Republic of the Congo"
        },
        {
            name        : 'wpnocode',
            id          : 4,
            value       : 0,
            description : "How to Contribute to WordPress without writing code"
        },
        {
            name        : 'users',
            id          : 5,
            value       : 0,
            description : "The WordPress users, Roles, and Capabilities APIs"
        },
    ]
}  , recent = []



// GET     /                 ->  index
// get a listing of all votes
exports.index = function( req, res ){
    res.send( votes )
};

// POST    /                 ->  create
// vote
exports.create = function( req, res ){
    // If a recent fingerprint, disregard
    if ( Boolean( req.body.fingerprint ) !== false, _.contains( results, req.body.fingerprint ) ) {
        res.send( votes )
        return
    } else {
        results.push( req.body.fingerprint )
    }


    // look for the ID, make sure the name matches
    if (typeof votes.questions[ req.body.vote ] !== 'undefined') {
        votes.questions[ req.body.vote ].value++
    }

    // register a vote for an item
    res.send( votes )
};


/* unused */

// GET     /new              ->  new
exports.new = function( req, res ){
    res.send( 'n/a' )
};

// GET     /:id              ->  show
exports.show = function( req, res ){
    res.send( 'n/a' )
};

// GET     /:id/edit         ->  edit
exports.edit = function( req, res ){
    res.send( 'n/a' )
};

// PUT     /:id              ->  update
exports.update = function( req, res ){
    res.send( 'n/a' )
};

// DELETE  /:id              ->  destroy
exports.destroy = function( req, res ){
    res.send( 'n/a' )
};
