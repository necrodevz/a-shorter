import React from 'react';

export default function TimekeyLayout()
{
    return(
    <Grid container spacing={2}>
            <Grid item xs={12}>
                {this.children}
            </Grid>
            <Grid item xs={12}>
                <Grid container xs={12}>
                    <Grid item xs={3}>
                        <Button>Approve</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button>Approve All</Button>
                    </Grid>
                    <Grid item xs={3}>
                        
                    </Grid>
                    <Grid item xs={3}>
                        <Button>Submit with changes</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}