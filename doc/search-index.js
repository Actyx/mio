var searchIndex = JSON.parse('{\
"mio":{"doc":"Mio is a fast, low-level I/O library for Rust focusing on …","i":[[0,"event","mio","Readiness event types and utilities.",null,null],[3,"Event","mio::event","A readiness event.",null,null],[3,"Events","","A collection of readiness events.",null,null],[3,"Iter","","<code>Events</code> iterator.",null,null],[8,"Source","","An event source that may be registered with <code>Registry</code>.",null,null],[10,"register","","Register <code>self</code> with the given <code>Registry</code> instance.",0,[[["token",3],["registry",3],["interest",3]],["result",6]]],[10,"reregister","","Re-register <code>self</code> with the given <code>Registry</code> instance.",0,[[["token",3],["registry",3],["interest",3]],["result",6]]],[10,"deregister","","Deregister <code>self</code> from the given <code>Registry</code> instance.",0,[[["registry",3]],["result",6]]],[0,"net","mio","Networking primitives.",null,null],[3,"TcpKeepalive","mio::net","Configures a socket\'s TCP keepalive parameters.",null,null],[3,"TcpListener","","A structure representing a socket server",null,null],[3,"TcpSocket","","A non-blocking TCP socket used to configure a stream or …",null,null],[3,"TcpStream","","A non-blocking TCP stream between a local socket and a …",null,null],[3,"UdpSocket","","A User Datagram Protocol socket.",null,null],[3,"SocketAddr","","An address associated with a <code>mio</code> specific Unix socket.",null,null],[3,"UnixDatagram","","A Unix datagram socket.",null,null],[3,"UnixListener","","A non-blocking Unix domain socket server.",null,null],[3,"UnixStream","","A non-blocking Unix stream socket.",null,null],[0,"unix","mio","Unix only extensions.",null,null],[0,"pipe","mio::unix","Unix pipe.",null,null],[5,"new","mio::unix::pipe","Create a new non-blocking Unix pipe.",null,[[],["result",6]]],[3,"Receiver","","Receiving end of an Unix pipe.",null,null],[3,"Sender","","Sending end of an Unix pipe.",null,null],[3,"SourceFd","mio::unix","Adapter for [<code>RawFd</code>] providing an <code>event::Source</code> …",null,null],[12,"0","","",1,null],[0,"features","mio","Mio\'s optional features.This document describes the …",null,null],[0,"guide","","Getting started guide.In this guide we\'ll do the …",null,null],[3,"Interest","","Interest used in registering.",null,null],[3,"Poll","","Polls for readiness events on all registered values.",null,null],[3,"Registry","","Registers I/O resources.",null,null],[3,"Token","","Associates readiness events with <code>event::Source</code>s.",null,null],[12,"0","","",2,null],[3,"Waker","","Waker allows cross-thread waking of <code>Poll</code>.",null,null],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","mio::unix","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","mio::net","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","mio::unix::pipe","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","mio","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","mio::event","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"into_iter","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","mio::net","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"register","mio::unix","",1,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"reregister","","",1,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"deregister","","",1,[[["registry",3]],["result",6]]],[11,"register","mio::unix::pipe","",7,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"reregister","","",7,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"deregister","","",7,[[["registry",3]],["result",6]]],[11,"register","","",8,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"reregister","","",8,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"deregister","","",8,[[["registry",3]],["result",6]]],[11,"register","mio::net","",13,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"reregister","","",13,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"deregister","","",13,[[["registry",3]],["result",6]]],[11,"register","","",16,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"reregister","","",16,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"deregister","","",16,[[["registry",3]],["result",6]]],[11,"register","","",17,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"reregister","","",17,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"deregister","","",17,[[["registry",3]],["result",6]]],[11,"register","","",18,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"reregister","","",18,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"deregister","","",18,[[["registry",3]],["result",6]]],[11,"register","","",19,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"reregister","","",19,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"deregister","","",19,[[["registry",3]],["result",6]]],[11,"register","","",20,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"reregister","","",20,[[["token",3],["registry",3],["interest",3]],["result",6]]],[11,"deregister","","",20,[[["registry",3]],["result",6]]],[11,"drop","","",14,[[]]],[11,"from","mio::unix::pipe","",7,[[["childstdin",3]],["sender",3]]],[11,"from","","",8,[[["childstdout",3]],["receiver",3]]],[11,"from","","",8,[[["childstderr",3]],["receiver",3]]],[11,"next","mio::event","",12,[[],["option",4]]],[11,"size_hint","","",12,[[]]],[11,"count","","",12,[[]]],[11,"clone","mio","",3,[[],["interest",3]]],[11,"clone","","",2,[[],["token",3]]],[11,"clone","mio::event","",10,[[],["event",3]]],[11,"clone","","",12,[[],["iter",3]]],[11,"clone","mio::net","",15,[[],["tcpkeepalive",3]]],[11,"default","","",15,[[],["tcpkeepalive",3]]],[11,"cmp","mio","",3,[[["interest",3]],["ordering",4]]],[11,"cmp","","",2,[[["token",3]],["ordering",4]]],[11,"eq","","",3,[[["interest",3]]]],[11,"ne","","",3,[[["interest",3]]]],[11,"eq","","",2,[[["token",3]]]],[11,"ne","","",2,[[["token",3]]]],[11,"partial_cmp","","",3,[[["interest",3]],[["option",4],["ordering",4]]]],[11,"lt","","",3,[[["interest",3]]]],[11,"le","","",3,[[["interest",3]]]],[11,"gt","","",3,[[["interest",3]]]],[11,"ge","","",3,[[["interest",3]]]],[11,"partial_cmp","","",2,[[["token",3]],[["option",4],["ordering",4]]]],[11,"lt","","",2,[[["token",3]]]],[11,"le","","",2,[[["token",3]]]],[11,"gt","","",2,[[["token",3]]]],[11,"ge","","",2,[[["token",3]]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","mio::unix","",1,[[["formatter",3]],["result",6]]],[11,"fmt","mio::net","",6,[[["formatter",3]],["result",6]]],[11,"fmt","mio::unix::pipe","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","mio","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","mio::event","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","mio::net","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",19,[[["formatter",3]],["result",6]]],[11,"fmt","","",20,[[["formatter",3]],["result",6]]],[11,"bitor","mio","",3,[[]]],[11,"bitor_assign","","",3,[[]]],[11,"hash","","",2,[[]]],[11,"read","mio::unix::pipe","",8,[[],["result",6]]],[11,"read_vectored","","",8,[[],["result",6]]],[11,"read","mio::net","",16,[[],["result",6]]],[11,"read_vectored","","",16,[[],["result",6]]],[11,"read","","",20,[[],["result",6]]],[11,"read_vectored","","",20,[[],["result",6]]],[11,"write","mio::unix::pipe","",7,[[],["result",6]]],[11,"write_vectored","","",7,[[],["result",6]]],[11,"flush","","",7,[[],["result",6]]],[11,"write","mio::net","",16,[[],["result",6]]],[11,"write_vectored","","",16,[[],["result",6]]],[11,"flush","","",16,[[],["result",6]]],[11,"write","","",20,[[],["result",6]]],[11,"write_vectored","","",20,[[],["result",6]]],[11,"flush","","",20,[[],["result",6]]],[11,"as_raw_fd","mio","",4,[[],["rawfd",6]]],[11,"as_raw_fd","","",5,[[],["rawfd",6]]],[11,"as_raw_fd","mio::unix::pipe","",7,[[],["rawfd",6]]],[11,"as_raw_fd","","",8,[[],["rawfd",6]]],[11,"as_raw_fd","mio::net","",13,[[],["rawfd",6]]],[11,"as_raw_fd","","",14,[[],["rawfd",6]]],[11,"as_raw_fd","","",16,[[],["rawfd",6]]],[11,"as_raw_fd","","",17,[[],["rawfd",6]]],[11,"as_raw_fd","","",18,[[],["rawfd",6]]],[11,"as_raw_fd","","",19,[[],["rawfd",6]]],[11,"as_raw_fd","","",20,[[],["rawfd",6]]],[11,"from_raw_fd","mio::unix::pipe","",7,[[["rawfd",6]],["sender",3]]],[11,"from_raw_fd","","",8,[[["rawfd",6]],["receiver",3]]],[11,"from_raw_fd","mio::net","Converts a <code>RawFd</code> to a <code>TcpListener</code>.",13,[[["rawfd",6]],["tcplistener",3]]],[11,"from_raw_fd","","Converts a <code>RawFd</code> to a <code>TcpSocket</code>.",14,[[["rawfd",6]],["tcpsocket",3]]],[11,"from_raw_fd","","Converts a <code>RawFd</code> to a <code>TcpStream</code>.",16,[[["rawfd",6]],["tcpstream",3]]],[11,"from_raw_fd","","Converts a <code>RawFd</code> to a <code>UdpSocket</code>.",17,[[["rawfd",6]],["udpsocket",3]]],[11,"from_raw_fd","","Converts a <code>RawFd</code> to a <code>UnixDatagram</code>.",18,[[["rawfd",6]],["unixdatagram",3]]],[11,"from_raw_fd","","Converts a <code>RawFd</code> to a <code>UnixListener</code>.",19,[[["rawfd",6]],["unixlistener",3]]],[11,"from_raw_fd","","Converts a <code>RawFd</code> to a <code>UnixStream</code>.",20,[[["rawfd",6]],["unixstream",3]]],[11,"into_raw_fd","mio::unix::pipe","",7,[[],["rawfd",6]]],[11,"into_raw_fd","","",8,[[],["rawfd",6]]],[11,"into_raw_fd","mio::net","",13,[[],["rawfd",6]]],[11,"into_raw_fd","","",14,[[],["rawfd",6]]],[11,"into_raw_fd","","",16,[[],["rawfd",6]]],[11,"into_raw_fd","","",17,[[],["rawfd",6]]],[11,"into_raw_fd","","",18,[[],["rawfd",6]]],[11,"into_raw_fd","","",19,[[],["rawfd",6]]],[11,"into_raw_fd","","",20,[[],["rawfd",6]]],[18,"READABLE","mio","Returns a <code>Interest</code> set representing readable interests.",3,null],[18,"WRITABLE","","Returns a <code>Interest</code> set representing writable interests.",3,null],[11,"add","","Add together two <code>Interest</code>.",3,[[["interest",3]],["interest",3]]],[11,"remove","","Removes <code>other</code> <code>Interest</code> from <code>self</code>.",3,[[["interest",3]],[["option",4],["interest",3]]]],[11,"is_readable","","Returns true if the value includes readable readiness.",3,[[]]],[11,"is_writable","","Returns true if the value includes writable readiness.",3,[[]]],[11,"is_aio","","Returns true if <code>Interest</code> contains AIO readiness",3,[[]]],[11,"is_lio","","Returns true if <code>Interest</code> contains LIO readiness",3,[[]]],[11,"registry","","Create a separate <code>Registry</code> which can be used to register …",4,[[],["registry",3]]],[11,"poll","","Wait for readiness events",4,[[["option",4],["events",3],["duration",3]],["result",6]]],[11,"new","","Return a new <code>Poll</code> handle.",4,[[],[["poll",3],["result",6]]]],[11,"register","","Register an <code>event::Source</code> with the <code>Poll</code> instance.",5,[[["token",3],["interest",3]],["result",6]]],[11,"reregister","","Re-register an [<code>event::Source</code>] with the <code>Poll</code> instance.",5,[[["token",3],["interest",3]],["result",6]]],[11,"deregister","","Deregister an [<code>event::Source</code>] with the <code>Poll</code> instance.",5,[[],["result",6]]],[11,"try_clone","","Creates a new independently owned <code>Registry</code>.",5,[[],[["result",6],["registry",3]]]],[11,"is_unnamed","mio::net","Returns <code>true</code> if the address is unnamed.",6,[[]]],[11,"as_pathname","","Returns the contents of this address if it is a <code>pathname</code> …",6,[[],[["option",4],["path",3]]]],[11,"set_nonblocking","mio::unix::pipe","Set the <code>Sender</code> into or out of non-blocking mode.",7,[[],["result",6]]],[11,"set_nonblocking","","Set the <code>Receiver</code> into or out of non-blocking mode.",8,[[],["result",6]]],[11,"new","mio","Create a new <code>Waker</code>.",9,[[["token",3],["registry",3]],[["result",6],["waker",3]]]],[11,"wake","","Wake up the <code>Poll</code> associated with this <code>Waker</code>.",9,[[],["result",6]]],[11,"token","mio::event","Returns the event\'s token.",10,[[],["token",3]]],[11,"is_readable","","Returns true if the event contains readable readiness.",10,[[]]],[11,"is_writable","","Returns true if the event contains writable readiness.",10,[[]]],[11,"is_error","","Returns true if the event contains error readiness.",10,[[]]],[11,"is_read_closed","","Returns true if the event contains read closed readiness.",10,[[]]],[11,"is_write_closed","","Returns true if the event contains write closed readiness.",10,[[]]],[11,"is_priority","","Returns true if the event contains priority readiness.",10,[[]]],[11,"is_aio","","Returns true if the event contains AIO readiness.",10,[[]]],[11,"is_lio","","Returns true if the event contains LIO readiness.",10,[[]]],[11,"with_capacity","","Return a new <code>Events</code> capable of holding up to <code>capacity</code> …",11,[[],["events",3]]],[11,"capacity","","Returns the number of <code>Event</code> values that <code>self</code> can hold.",11,[[]]],[11,"is_empty","","Returns <code>true</code> if <code>self</code> contains no <code>Event</code> values.",11,[[]]],[11,"iter","","Returns an iterator over the <code>Event</code> values.",11,[[],["iter",3]]],[11,"clear","","Clearing all <code>Event</code> values from container explicitly.",11,[[]]],[11,"bind","mio::net","Convenience method to bind a new TCP listener to the …",13,[[["socketaddr",4]],[["result",6],["tcplistener",3]]]],[11,"from_std","","Creates a new <code>TcpListener</code> from a standard <code>net::TcpListener</code>…",13,[[["tcplistener",3]],["tcplistener",3]]],[11,"accept","","Accepts a new <code>TcpStream</code>.",13,[[],["result",6]]],[11,"local_addr","","Returns the local socket address of this listener.",13,[[],[["result",6],["socketaddr",4]]]],[11,"set_ttl","","Sets the value for the <code>IP_TTL</code> option on this socket.",13,[[],["result",6]]],[11,"ttl","","Gets the value of the <code>IP_TTL</code> option for this socket.",13,[[],["result",6]]],[11,"take_error","","Get the value of the <code>SO_ERROR</code> option on this socket.",13,[[],[["option",4],["result",6]]]],[11,"new_v4","","Create a new IPv4 TCP socket.",14,[[],[["result",6],["tcpsocket",3]]]],[11,"new_v6","","Create a new IPv6 TCP socket.",14,[[],[["result",6],["tcpsocket",3]]]],[11,"bind","","Bind <code>addr</code> to the TCP socket.",14,[[["socketaddr",4]],["result",6]]],[11,"connect","","Connect the socket to <code>addr</code>.",14,[[["socketaddr",4]],[["result",6],["tcpstream",3]]]],[11,"listen","","Listen for inbound connections, converting the socket to a…",14,[[],[["result",6],["tcplistener",3]]]],[11,"set_reuseaddr","","Sets the value of <code>SO_REUSEADDR</code> on this socket.",14,[[],["result",6]]],[11,"get_reuseaddr","","Get the value of <code>SO_REUSEADDR</code> set on this socket.",14,[[],["result",6]]],[11,"set_reuseport","","Sets the value of <code>SO_REUSEPORT</code> on this socket. Only …",14,[[],["result",6]]],[11,"get_reuseport","","Get the value of <code>SO_REUSEPORT</code> set on this socket. Only …",14,[[],["result",6]]],[11,"set_linger","","Sets the value of <code>SO_LINGER</code> on this socket.",14,[[["option",4],["duration",3]],["result",6]]],[11,"get_linger","","Gets the value of <code>SO_LINGER</code> on this socket",14,[[],[["option",4],["result",6]]]],[11,"set_recv_buffer_size","","Sets the value of <code>SO_RCVBUF</code> on this socket.",14,[[],["result",6]]],[11,"get_recv_buffer_size","","Get the value of <code>SO_RCVBUF</code> set on this socket.",14,[[],["result",6]]],[11,"set_send_buffer_size","","Sets the value of <code>SO_SNDBUF</code> on this socket.",14,[[],["result",6]]],[11,"get_send_buffer_size","","Get the value of <code>SO_SNDBUF</code> set on this socket.",14,[[],["result",6]]],[11,"set_keepalive","","Sets whether keepalive messages are enabled to be sent on …",14,[[],["result",6]]],[11,"get_keepalive","","Returns whether or not TCP keepalive probes will be sent …",14,[[],["result",6]]],[11,"set_keepalive_params","","Sets parameters configuring TCP keepalive probes for this …",14,[[["tcpkeepalive",3]],["result",6]]],[11,"get_keepalive_time","","Returns the amount of time after which TCP keepalive …",14,[[],[["option",4],["result",6]]]],[11,"get_keepalive_interval","","Returns the time interval between TCP keepalive probes, …",14,[[],[["option",4],["result",6]]]],[11,"get_keepalive_retries","","Returns the maximum number of TCP keepalive probes that …",14,[[],[["option",4],["result",6]]]],[11,"get_localaddr","","Returns the local address of this socket",14,[[],[["result",6],["socketaddr",4]]]],[11,"with_time","","on idle connections.",15,[[["duration",3]]]],[11,"with_interval","","Sets the time interval between TCP keepalive probes. This …",15,[[["duration",3]]]],[11,"with_retries","","Sets the maximum number of TCP keepalive probes that will …",15,[[]]],[11,"new","","Returns a new, empty set of TCP keepalive parameters.",15,[[]]],[11,"connect","","Create a new TCP stream and issue a non-blocking connect …",16,[[["socketaddr",4]],[["result",6],["tcpstream",3]]]],[11,"from_std","","Creates a new <code>TcpStream</code> from a standard <code>net::TcpStream</code>.",16,[[["tcpstream",3]],["tcpstream",3]]],[11,"peer_addr","","Returns the socket address of the remote peer of this TCP …",16,[[],[["result",6],["socketaddr",4]]]],[11,"local_addr","","Returns the socket address of the local half of this TCP …",16,[[],[["result",6],["socketaddr",4]]]],[11,"shutdown","","Shuts down the read, write, or both halves of this …",16,[[["shutdown",4]],["result",6]]],[11,"set_nodelay","","Sets the value of the <code>TCP_NODELAY</code> option on this socket.",16,[[],["result",6]]],[11,"nodelay","","Gets the value of the <code>TCP_NODELAY</code> option on this socket.",16,[[],["result",6]]],[11,"set_ttl","","Sets the value for the <code>IP_TTL</code> option on this socket.",16,[[],["result",6]]],[11,"ttl","","Gets the value of the <code>IP_TTL</code> option for this socket.",16,[[],["result",6]]],[11,"take_error","","Get the value of the <code>SO_ERROR</code> option on this socket.",16,[[],[["option",4],["result",6]]]],[11,"peek","","Receives data on the socket from the remote address to …",16,[[],["result",6]]],[11,"bind","","Creates a UDP socket from the given address.",17,[[["socketaddr",4]],[["result",6],["udpsocket",3]]]],[11,"from_std","","Creates a new <code>UdpSocket</code> from a standard <code>net::UdpSocket</code>.",17,[[["udpsocket",3]],["udpsocket",3]]],[11,"local_addr","","Returns the socket address that this socket was created …",17,[[],[["result",6],["socketaddr",4]]]],[11,"peer_addr","","Returns the socket address of the remote peer this socket …",17,[[],[["result",6],["socketaddr",4]]]],[11,"send_to","","Sends data on the socket to the given address. On …",17,[[["socketaddr",4]],["result",6]]],[11,"recv_from","","Receives data from the socket. On success, returns the …",17,[[],["result",6]]],[11,"peek_from","","Receives data from the socket, without removing it from …",17,[[],["result",6]]],[11,"send","","Sends data on the socket to the address previously bound …",17,[[],["result",6]]],[11,"recv","","Receives data from the socket previously bound with …",17,[[],["result",6]]],[11,"peek","","Receives data from the socket, without removing it from …",17,[[],["result",6]]],[11,"connect","","Connects the UDP socket setting the default destination …",17,[[["socketaddr",4]],["result",6]]],[11,"set_broadcast","","Sets the value of the <code>SO_BROADCAST</code> option for this socket.",17,[[],["result",6]]],[11,"broadcast","","Gets the value of the <code>SO_BROADCAST</code> option for this socket.",17,[[],["result",6]]],[11,"set_multicast_loop_v4","","Sets the value of the <code>IP_MULTICAST_LOOP</code> option for this …",17,[[],["result",6]]],[11,"multicast_loop_v4","","Gets the value of the <code>IP_MULTICAST_LOOP</code> option for this …",17,[[],["result",6]]],[11,"set_multicast_ttl_v4","","Sets the value of the <code>IP_MULTICAST_TTL</code> option for this …",17,[[],["result",6]]],[11,"multicast_ttl_v4","","Gets the value of the <code>IP_MULTICAST_TTL</code> option for this …",17,[[],["result",6]]],[11,"set_multicast_loop_v6","","Sets the value of the <code>IPV6_MULTICAST_LOOP</code> option for this …",17,[[],["result",6]]],[11,"multicast_loop_v6","","Gets the value of the <code>IPV6_MULTICAST_LOOP</code> option for this …",17,[[],["result",6]]],[11,"set_ttl","","Sets the value for the <code>IP_TTL</code> option on this socket.",17,[[],["result",6]]],[11,"ttl","","Gets the value of the <code>IP_TTL</code> option for this socket.",17,[[],["result",6]]],[11,"join_multicast_v4","","Executes an operation of the <code>IP_ADD_MEMBERSHIP</code> type.",17,[[["ipv4addr",3]],["result",6]]],[11,"join_multicast_v6","","Executes an operation of the <code>IPV6_ADD_MEMBERSHIP</code> type.",17,[[["ipv6addr",3]],["result",6]]],[11,"leave_multicast_v4","","Executes an operation of the <code>IP_DROP_MEMBERSHIP</code> type.",17,[[["ipv4addr",3]],["result",6]]],[11,"leave_multicast_v6","","Executes an operation of the <code>IPV6_DROP_MEMBERSHIP</code> type.",17,[[["ipv6addr",3]],["result",6]]],[11,"only_v6","","Get the value of the <code>IPV6_V6ONLY</code> option on this socket.",17,[[],["result",6]]],[11,"take_error","","Get the value of the <code>SO_ERROR</code> option on this socket.",17,[[],[["option",4],["result",6]]]],[11,"bind","","Creates a Unix datagram socket bound to the given path.",18,[[["asref",8],["path",3]],[["unixdatagram",3],["result",6]]]],[11,"from_std","","Creates a new <code>UnixDatagram</code> from a standard …",18,[[["unixdatagram",3]],["unixdatagram",3]]],[11,"connect","","Connects the socket to the specified address.",18,[[["asref",8],["path",3]],["result",6]]],[11,"unbound","","Creates a Unix Datagram socket which is not bound to any …",18,[[],[["unixdatagram",3],["result",6]]]],[11,"pair","","Create an unnamed pair of connected sockets.",18,[[],["result",6]]],[11,"local_addr","","Returns the address of this socket.",18,[[],[["socketaddr",3],["result",6]]]],[11,"peer_addr","","Returns the address of this socket\'s peer.",18,[[],[["socketaddr",3],["result",6]]]],[11,"recv_from","","Receives data from the socket.",18,[[],["result",6]]],[11,"recv","","Receives data from the socket.",18,[[],["result",6]]],[11,"send_to","","Sends data on the socket to the specified address.",18,[[["asref",8],["path",3]],["result",6]]],[11,"send","","Sends data on the socket to the socket\'s peer.",18,[[],["result",6]]],[11,"take_error","","Returns the value of the <code>SO_ERROR</code> option.",18,[[],[["option",4],["result",6]]]],[11,"shutdown","","Shut down the read, write, or both halves of this …",18,[[["shutdown",4]],["result",6]]],[11,"bind","","Creates a new <code>UnixListener</code> bound to the specified socket.",19,[[["asref",8],["path",3]],[["result",6],["unixlistener",3]]]],[11,"from_std","","Creates a new <code>UnixListener</code> from a standard …",19,[[["unixlistener",3]],["unixlistener",3]]],[11,"accept","","Accepts a new incoming connection to this listener.",19,[[],["result",6]]],[11,"local_addr","","Returns the local socket address of this listener.",19,[[],[["socketaddr",3],["result",6]]]],[11,"take_error","","Returns the value of the <code>SO_ERROR</code> option.",19,[[],[["option",4],["result",6]]]],[11,"connect","","Connects to the socket named by <code>path</code>.",20,[[["asref",8],["path",3]],[["result",6],["unixstream",3]]]],[11,"from_std","","Creates a new <code>UnixStream</code> from a standard <code>net::UnixStream</code>.",20,[[["unixstream",3]],["unixstream",3]]],[11,"pair","","Creates an unnamed pair of connected sockets.",20,[[],["result",6]]],[11,"local_addr","","Returns the socket address of the local half of this …",20,[[],[["socketaddr",3],["result",6]]]],[11,"peer_addr","","Returns the socket address of the remote half of this …",20,[[],[["socketaddr",3],["result",6]]]],[11,"take_error","","Returns the value of the <code>SO_ERROR</code> option.",20,[[],[["option",4],["result",6]]]],[11,"shutdown","","Shuts down the read, write, or both halves of this …",20,[[["shutdown",4]],["result",6]]]],"p":[[8,"Source"],[3,"SourceFd"],[3,"Token"],[3,"Interest"],[3,"Poll"],[3,"Registry"],[3,"SocketAddr"],[3,"Sender"],[3,"Receiver"],[3,"Waker"],[3,"Event"],[3,"Events"],[3,"Iter"],[3,"TcpListener"],[3,"TcpSocket"],[3,"TcpKeepalive"],[3,"TcpStream"],[3,"UdpSocket"],[3,"UnixDatagram"],[3,"UnixListener"],[3,"UnixStream"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);