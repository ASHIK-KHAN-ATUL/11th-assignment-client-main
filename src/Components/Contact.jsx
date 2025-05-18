

const Contact = () => {

    return (
        <div className="min-h-screen flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-3xl  border p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-[#6794fc] mb-6">Contact Us</h2>
                <p className="text-center mb-10 text-gray-600">We’d love to hear from you. Send us a message and we’ll respond as soon as possible!</p>
                
                <form className="space-y-5">

                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Your name"
                            className="w-full px-4 py-3 border rounded-xl outline-none bg-transparent focus:ring-2 focus:ring-[#6794fc]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder="you@example.com"
                            className="w-full bg-transparent px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-[#abc4ff]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea
                            rows="5"
                            name='message'
                            placeholder="Write your message here..."
                            className="w-full bg-transparent px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-[#abc4ff]"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#abc4ff] text-white py-3 rounded-xl hover:bg-[#6794fc] transition font-semibold"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
