import gql from 'graphql-tag';

const MY_POTENTIAL_VOTERS = gql`
  query potentialVoters($org_id: String!, $limit: Int!, $after: String) {
    potentialVoters(
      where: { org_id_is: $org_id }
      orderBy: [{ sort: last_name, direction: ASC }, { sort: first_name, direction: ASC }]
      limit: $limit
      after: $after
    ) {
      items {
        id
        first_name
        last_name
        city
        user_email
        org_id
        countCompletedTasks
        countAvailableTasks
        voterFileRecord {
          state_file_id
          first_name
          middle_name
          last_name
          home_address
          city
          state
          zipcode
          dob
          vo_ab_requested
          vo_ab_requested_date
          vo_voted
          vo_voted_date
          vo_voted_method
        }
        nextTask {
          id
          form_schema
          point_value
        }
      }
      pageInfo {
        nextCursor
        totalCount
      }
    }
  }
`;

export default MY_POTENTIAL_VOTERS;