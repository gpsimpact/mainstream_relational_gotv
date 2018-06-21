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