SELECT 
  u.first_name,
  u.last_name,
  u.email,
  pv.first_name,
  pv.last_name,
  pv.city,
  vf.*
FROM users u
LEFT JOIN permissions p ON u.email = p.email
LEFT JOIN potential_voters pv ON pv.user_email = u.email
LEFT JOIN shared.voter_file vf ON pv.state_file_id = vf.state_file_id
WHERE p.org_id = 'de869734-9f2d-4012-bef2-bbf0911335e2'
AND p.permission = 'AMBASSADOR'
AND pv.deleted = FALSE;