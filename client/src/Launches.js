import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number,
      mission_name,
      launch_date_local,
      launch_success
    }
  }
`

class Launches extends React.Component {
    render() {
        return(
            <div>
                <MissionKey></MissionKey>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({loading, error, data}) => {
                        if(loading) return <h4>Loading...</h4>
                        if(error) return console.log(error);
                        return <React.Fragment>
                            {
                                data.launches.map(launch => (
                                    <LaunchItem key={launch.flight_number} launch={launch}></LaunchItem>
                                ))
                            }
                        </React.Fragment>
                        }
                    }
                </Query>
            </div>
        );
    }
}
export default Launches;