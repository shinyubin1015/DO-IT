function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export async function onRequestPost({ env, request }) {
  const body = await request.json();

  const login_id = body?.login_id?.trim();
  const email = body?.email?.trim();
  const password = body?.password?.trim();
  const nickname = body?.nickname?.trim();

  if (!login_id || !email || !password || !nickname) {
    return json({ message: "모든 항목을 입력해주세요." }, 400);
  }

  // ✅ 아이디 중복 체크
  const exist = await env.D1_DB.prepare(
    "SELECT user_id FROM user WHERE login_id = ?"
  ).bind(login_id).first();

  if (exist) {
    return json({ message: "이미 존재하는 아이디입니다." }, 400);
  }

  // ✅ 회원 저장 (지금은 비밀번호 암호화 안 함 → 나중에 추가 가능)
  const result = await env.D1_DB.prepare(`
    INSERT INTO user (login_id, email, password, nickname)
    VALUES (?, ?, ?, ?)
  `).bind(login_id, email, password, nickname).run();

  return json({
    ok: true,
    user_id: result.meta.last_row_id
  });
}
