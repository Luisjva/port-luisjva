import {
	Button,
	Center,
	CloseButton,
	Modal,
	Text,
	TextInput,
} from "@mantine/core";
import Highlight from "@tiptap/extension-highlight";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor } from "@mantine/tiptap";
import Underline from "@tiptap/extension-underline";
import { useState } from "react";
import Image from "next/image";

const content = "";

const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const EmailModal = ({
	opened,
	close,
}: {
	opened: boolean;
	close: () => void;
}) => {
	const editor = useEditor({
		extensions: [StarterKit, Underline, Highlight],
		content,
		onUpdate: ({ editor }) => {
			setError({
				...error,
				content:
					editor.getText().trim().length < 15
						? "Content is too short"
						: undefined,
			});
			setData({ ...data, content: editor.getHTML() });
		},
	});

	const [sendStatus, setSendStatus] = useState<"success" | "error" | null>(
		null
	);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<{
		name?: string;
		email?: string;
		subject?: string;
		content?: string;
	}>({
		name: undefined,
		email: undefined,
		subject: undefined,
		content: undefined,
	});
	const [data, setData] = useState({
		name: "",
		email: "",
		subject: "",
		content: "",
	});
	const sendEmail = () => {
		if (!!error?.name || !!error?.email || !!error?.subject || !!error?.content)
			return;

		setLoading(true);
		setSendStatus(null);
		setTimeout(() => {
			setLoading(false);
			setSendStatus("success");
			setData({
				name: "",
				email: "",
				subject: "",
				content: "",
			});
			editor?.commands.setContent("");
			// close();
		}, 2000);
		console.log("send email", data);
	};

	console.log("error", error);

	return (
		<Modal
			opened={opened}
			onClose={close}
			centered
			className="contact__modal"
			withCloseButton={false}
		>
			<div className="contact__modal-header">
				<Image src="/email.svg" alt="email" width={5 * 16} height={5 * 16} />
				<div>
					<div>
						<h3>¡Hello!</h3>
						<CloseButton
							onClick={close}
							style={{ color: "#fff", backgroundColor: "transparent" }}
						/>
					</div>
					<p>Let&apos;s explore new opportunities together.</p>
				</div>
			</div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					sendEmail();
				}}
			>
				<TextInput
					label="Name"
					placeholder="Name"
					value={data.name}
					onChange={(e) => {
						setData({ ...data, name: e.target.value });
						setError({
							...error,
							name: !e.target.value.trim().length
								? "Name is Required"
								: undefined,
						});
					}}
					required
					error={error?.name}
					autoFocus
				/>
				<TextInput
					label="Email"
					placeholder="Email"
					value={data.email}
					onChange={(e) => {
						setData({ ...data, email: e.target.value });
						setError({
							...error,
							email: !emailRegex.test(e.target.value.trim())
								? "Email is invalid"
								: undefined,
						});
					}}
					required
					error={error?.email}
				/>
				<TextInput
					label="Subject"
					placeholder="Subject"
					value={data.subject}
					onChange={(e) => {
						setData({ ...data, subject: e.target.value });
						setError({
							...error,
							subject:
								e.target.value.trim().length < 5
									? "Subject is too short"
									: undefined,
						});
					}}
					required
					error={error?.subject}
				/>
				<div>
					<Text fw={500} style={{ fontSize: "0.875rem" }}>
						Content <span style={{ color: "#fa5252" }}>*</span>
					</Text>
					<RichTextEditor editor={editor} variant="subtle">
						<RichTextEditor.Toolbar
							sticky
							stickyOffset="var(--docs-header-height)"
						>
							<RichTextEditor.ControlsGroup>
								<RichTextEditor.Bold />
								<RichTextEditor.Italic />
								<RichTextEditor.Underline />
								<RichTextEditor.Strikethrough />
								<RichTextEditor.ClearFormatting />
								<RichTextEditor.Highlight />
								<RichTextEditor.Code />
							</RichTextEditor.ControlsGroup>
						</RichTextEditor.Toolbar>

						<RichTextEditor.Content />
					</RichTextEditor>
					{error?.content && (
						<Text
							color={"red"}
							style={{ fontSize: "calc(0.875rem - 0.125rem)" }}
						>
							Content is too short
						</Text>
					)}
				</div>

				{sendStatus === "success" && (
					<div className="contact__modal-header contact__modal-success">
						<Image
							src="/message-sent.svg"
							alt="message-sent"
							width={5 * 16}
							height={5 * 16}
						/>
						<div>
							<div>
								<h3>Message Sent</h3>

								<CloseButton
									onClick={() => setSendStatus(null)}
									style={{ color: "#fff", backgroundColor: "transparent" }}
								/>
							</div>
							<p>
								Thank you for your message. I will get back to you as soon as
								possible.
							</p>
						</div>
					</div>
				)}

				<Center>
					<Button
						variant="filled"
						radius={"1rem"}
						aria-label="Send"
						type="submit"
						disabled={
							data.name.trim().length < 1 ||
							!emailRegex.test(data.email.trim()) ||
							data.subject.trim().length < 5 ||
							!(editor?.getText() && editor?.getText().trim().length > 15)
						}
						loading={loading}
					>
						Send
					</Button>
				</Center>
			</form>
		</Modal>
	);
};
