-- ORG SPECIFIC COHORT
SELECT 
  u.first_name AS ambassador_first_name,
  u.last_name AS ambassador_last_name,
  u.email AS ambassador_email,
  pv.first_name AS contact_first_name,
  pv.last_name AS contact_last_name,
  pv.city as contact_city,
  vf.state_file_id AS voter_file_state_file_id,
  vf.first_name AS voter_file_first_name,
  vf.middle_name AS voter_file_middle_name,
  vf.last_name AS voter_file_last_name,
  vf.home_address AS voter_file_home_address,
  vf.city AS voter_file_city,
  vf.state AS voter_file_state,
  vf.zipcode AS voter_file_zipcode,
  vf.dob AS voter_file_dob,
  vo_ab_requested_primary,
  vo_ab_requested_date_primary,
  vo_voted_primary,
  vo_voted_date_primary,
  vo_voted_method_primary,
  vo_ab_requested_general,
  vo_ab_requested_date_general,
  vo_voted_general,
  vo_voted_date_general,
  vo_voted_method_general,
  propensity_score,
  party
FROM users u
LEFT JOIN permissions p ON u.email = p.email
LEFT JOIN potential_voters pv ON pv.user_email = u.email
LEFT JOIN shared.voter_file vf ON pv.state_file_id = vf.state_file_id
WHERE p.org_id = 'de869734-9f2d-4012-bef2-bbf0911335e2'
AND p.permission = 'AMBASSADOR'
AND pv.deleted = FALSE;


-- MASTER ADMIN VIEW
SELECT 
  o.name AS org_name,
  u.first_name AS ambassador_first_name,
  u.last_name AS ambassador_last_name,
  u.email AS ambassador_email,
  pv.first_name AS contact_first_name,
  pv.last_name AS contact_last_name,
  pv.city as contact_city,
  vf.state_file_id AS voter_file_state_file_id,
  vf.first_name AS voter_file_first_name,
  vf.middle_name AS voter_file_middle_name,
  vf.last_name AS voter_file_last_name,
  vf.home_address AS voter_file_home_address,
  vf.city AS voter_file_city,
  vf.state AS voter_file_state,
  vf.zipcode AS voter_file_zipcode,
  vf.dob AS voter_file_dob,
  vo_ab_requested_primary,
  vo_ab_requested_date_primary,
  vo_voted_primary,
  vo_voted_date_primary,
  vo_voted_method_primary,
  vo_ab_requested_general,
  vo_ab_requested_date_general,
  vo_voted_general,
  vo_voted_date_general,
  vo_voted_method_general,
  propensity_score,
  party
FROM users u
LEFT JOIN permissions p ON u.email = p.email
LEFT JOIN organizations o ON o.id = p.org_id
LEFT JOIN potential_voters pv ON pv.user_email = u.email
LEFT JOIN shared.voter_file vf ON pv.state_file_id = vf.state_file_id
WHERE pv.deleted = FALSE
ORDER BY 1;

-- master list user meta
SELECT
	*,
	rank() OVER (PARTITION BY org_name ORDER BY points_earned DESC) as rank_in_org
FROM (
	SELECT 
		names.first_name,
		names.last_name,
		names.email,
		names.org_name,
		names.count as contact_count,
		COALESCE(pr.earned,0) as points_earned
	FROM (
		SELECT
		  u.first_name,
		  u.last_name,
		  u.email,
		  o.name as org_name,
		  o.id as org_id,
		  count(pv.id) as count,
		  round(avg(vf.propensity_score),2) as avg_propensity_score
		FROM (
		  SELECT
		    *
		  FROM users
		) u LEFT JOIN (
		  SELECT
		    *
		  FROM permissions
		) p ON u.email = p.email
		LEFT JOIN (
		  SELECT
		    *
		  FROM organizations
		) o ON o.id = p.org_id
		LEFT JOIN (
		  SELECT
		    *
		  FROM potential_voters pv
		  WHERE pv.deleted = false
		) pv ON pv.user_email = u.email
		LEFT JOIN (
			SELECT 
				*
			FROM shared.voter_file
		) vf ON pv.state_file_id = vf.state_file_id
		GROUP BY 1,2,3,4,5
	) names
	LEFT JOIN (
		SELECT
			*
		FROM points_rollup
	) pr on pr.user_email = names.email and pr.org_id = names.org_id
) pre
ORDER BY 4,2;

