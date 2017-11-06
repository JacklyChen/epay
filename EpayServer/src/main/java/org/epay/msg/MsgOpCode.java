package org.epay.msg;

import org.grain.threadmsg.ThreadMsgManager;

public class MsgOpCode {
	public static String ADD_NOTIFY = "ADD_NOTIFY";

	public static void init() {
		ThreadMsgManager.addMapping(ADD_NOTIFY, null);
	}
}
